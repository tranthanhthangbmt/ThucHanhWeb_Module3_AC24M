import os

source_dir = r"C:\Users\thanh\.gemini\antigravity\brain\b04fc1d6-b20f-4a80-bce3-d4b1cd887734"
dest_dir = r"d:\DongAUniversity\TÀI LIỆU DẠY HỌC_2024-2025\CNTT.2025. TriTueNhanTaoUngDung_3TC\Các buổi học\Buổi 2\Thực hành\WebCarService\images"

files = {
    "web_intro_html_chassis_1764863635709.png": "html_chassis.png",
    "web_intro_css_paint_1764863650055.png": "css_paint.png",
    "web_intro_js_engine_1764863669261.png": "js_engine.png"
}

if not os.path.exists(dest_dir):
    os.makedirs(dest_dir)

for src_name, dest_name in files.items():
    src_path = os.path.join(source_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    try:
        with open(src_path, 'rb') as f_src:
            content = f_src.read()
        with open(dest_path, 'wb') as f_dest:
            f_dest.write(content)
        print(f"Successfully copied {src_name} to {dest_name}")
    except Exception as e:
        print(f"Failed to copy {src_name}: {e}")
