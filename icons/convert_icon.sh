sips -z 16 16     sysmocap-icon-2.png --out tmp.iconset/icon_16x16.png
sips -z 32 32     sysmocap-icon-2.png --out tmp.iconset/icon_16x16@2x.png
sips -z 32 32     sysmocap-icon-2.png --out tmp.iconset/icon_32x32.png
sips -z 64 64     sysmocap-icon-2.png --out tmp.iconset/icon_32x32@2x.png
sips -z 128 128   sysmocap-icon-2.png --out tmp.iconset/icon_128x128.png
sips -z 256 256   sysmocap-icon-2.png --out tmp.iconset/icon_128x128@2x.png
sips -z 256 256   sysmocap-icon-2.png --out tmp.iconset/icon_256x256.png
sips -z 512 512   sysmocap-icon-2.png --out tmp.iconset/icon_256x256@2x.png
sips -z 512 512   sysmocap-icon-2.png --out tmp.iconset/icon_512x512.png
sips -z 1024 1024   sysmocap-icon-2.png --out tmp.iconset/icon_512x512@2x.png
iconutil -c icns tmp.iconset -o sysmocap.icns
# brew install imagemagick
convert -density 384 sysmocap-icon-2.png -define icon:auto-resize sysmocap.ico 