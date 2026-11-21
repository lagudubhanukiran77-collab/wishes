import qrcode

# Data to store in QR code
data = "https://lucent-stardust-437dbe.netlify.app/" \

# Generate QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4
)

qr.add_data(data)
qr.make(fit=True)

# Create QR code image
img = qr.make_image(
    fill_color="black",
    back_color="white"
)

# Save QR code
img.save("my_qrcode.png")

print("QR Code generated successfully!")