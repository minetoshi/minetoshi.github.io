#!/usr/bin/env bash
set -euo pipefail

# Diagnostic fallback for Macs where SwiftPM hangs on the official binary downloads.
# Uses the exact official 8.6.2 artifacts and restores the generated manifest afterward.
script_dir="$(cd "$(dirname "$0")" && pwd)"
mobile_dir="$(cd "$script_dir/.." && pwd)"
manifest="$mobile_dir/ios/App/CapApp-SPM/Package.swift"
cache_dir="${TMPDIR:-/tmp}/dp700-capacitor-8.6.2"
package_dir="$cache_dir/dp700-local-capacitor"
original="$cache_dir/CapApp-SPM.Package.swift.original"
mkdir -p "$cache_dir" "$package_dir/Frameworks"
if ! grep -q 'exact: "8.6.2"' "$manifest"; then
  echo 'Expected Capacitor 8.6.2 manifest; inspect dependency version before using fallback.' >&2
  exit 1
fi
for item in \
  'Capacitor 584538bf09d52adb2a86ecabac495c151896d60b28e0cccc286280f2c7ed7e87' \
  'Cordova 63f4ec1c21340f7caf7df7263618ee262c8bc8a18bb91b9d9716602e6fda3fa3'; do
  read -r name expected <<< "$item"
  archive="$cache_dir/$name.xcframework.zip"
  if [[ ! -f "$archive" ]] || [[ "$(shasum -a 256 "$archive" | cut -d ' ' -f 1)" != "$expected" ]]; then
    curl --fail --location --silent --show-error --output "$archive" "https://github.com/ionic-team/capacitor-swift-pm/releases/download/8.6.2/$name.xcframework.zip"
  fi
  [[ "$(shasum -a 256 "$archive" | cut -d ' ' -f 1)" == "$expected" ]] || { echo "Checksum mismatch: $name" >&2; exit 1; }
  unzip -q -o "$archive" -d "$package_dir/Frameworks"
done
cat > "$package_dir/Package.swift" <<'EOF'
// swift-tools-version:5.9
import PackageDescription
let package = Package(name: "capacitor-swift-pm", products: [.library(name: "Capacitor", targets: ["Capacitor"]), .library(name: "Cordova", targets: ["Cordova"])], targets: [.binaryTarget(name: "Capacitor", path: "Frameworks/Capacitor.xcframework"), .binaryTarget(name: "Cordova", path: "Frameworks/Cordova.xcframework")])
EOF
cp "$manifest" "$original"
restore() { cp "$original" "$manifest"; }
trap restore EXIT INT TERM
python3 - "$manifest" "$package_dir" <<'PY'
import pathlib,sys
file=pathlib.Path(sys.argv[1]); package=sys.argv[2]
text=file.read_text()
text=text.replace('.package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", exact: "8.6.2")',f'.package(path: "{package}")')
text=text.replace('package: "capacitor-swift-pm"','package: "dp700-local-capacitor"')
file.write_text(text)
PY
"$@"
