import base64
import os
import sys

print("STARTING SCRIPT")

vtt_path = r"d:/DongAUniversity/TÀI LIỆU DẠY HỌC_2024-2025/CNTT.2025. TriTueNhanTaoUngDung_3TC/Các buổi học/Buổi 2/Thực hành/WebCarService/tutorial.vtt"
html_path = r"d:/DongAUniversity/TÀI LIỆU DẠY HỌC_2024-2025/CNTT.2025. TriTueNhanTaoUngDung_3TC/Các buổi học/Buổi 2/Thực hành/WebCarService/tutorial.html"

if not os.path.exists(vtt_path):
    print(f"VTT file not found: {vtt_path}")
    sys.exit(1)

if not os.path.exists(html_path):
    print(f"HTML file not found: {html_path}")
    sys.exit(1)

try:
    with open(vtt_path, 'rb') as f:
        vtt_content = f.read()
    print(f"Read VTT content: {len(vtt_content)} bytes")

    b64_vtt = base64.b64encode(vtt_content).decode('utf-8')
    data_uri = f"data:text/vtt;base64,{b64_vtt}"
    print("Encoded VTT to Base64")

    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    if 'src="tutorial.vtt"' in html_content:
        new_html_content = html_content.replace('src="tutorial.vtt"', f'src="{data_uri}"')
        
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(new_html_content)
        print("Successfully embedded VTT as Data URI.")
    else:
        print("Target string 'src=\"tutorial.vtt\"' not found.")

except Exception as e:
    print(f"Error: {e}")

print("ENDING SCRIPT")
