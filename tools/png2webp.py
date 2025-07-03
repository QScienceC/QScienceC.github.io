from PIL import Image

def convert_png_to_webp(png_path, webp_path, quality=80):
    """
    Converts a PNG image to WebP format.

    Args:
        png_path (str): The path to the input PNG file.
        webp_path (str): The path to save the output WebP file.
        quality (int, optional): The quality of the WebP image (0-100). Defaults to 80.
    """
    try:
        img = Image.open(png_path)
        # Convert to RGB mode if the image has an alpha channel (RGBA)
        # as WebP typically handles transparency differently or requires RGB for certain operations.
        if img.mode == 'RGBA':
            img = img.convert('RGB')
        img.save(webp_path, 'webp', quality=quality)
        print(f"Successfully converted '{png_path}' to '{webp_path}'")
    except FileNotFoundError:
        print(f"Error: PNG file not found at '{png_path}'")
    except Exception as e:
        print(f"An error occurred during conversion: {e}")

# usage:
input_png_file = './images/puma_camera_trap.001.png'  
output_webp_file = './images/puma_camera_trap.webp'

convert_png_to_webp(input_png_file, output_webp_file)