#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

# Keep in sync with .github/workflows/resume.yml
RENDERCV_VERSION=2.8

if [[ ! -x .venv/bin/python ]]; then
  python3 -m venv .venv
fi
.venv/bin/pip install -q --disable-pip-version-check "rendercv[full]==$RENDERCV_VERSION"

# RenderCV resolves relative output paths against the YAML's directory
.venv/bin/rendercv render resume/resume.yaml -pdf "$PWD/public/resume.pdf" -nomd -nohtml -nopng
