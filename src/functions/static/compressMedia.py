import os
from PIL import Image
import ffmpeg

def copy_file(source_file, target_file):
    """
    Copy a file from source to target location.
    Args:
        source_file (str): Path to the source file.
        target_file (str): Path where the file will be copied.
    """
    try:
        os.replace(source_file, target_file)
        # copy file
        # os.makedirs(os.path.dirname(target_file), exist_ok=True)
        # with open(source_file, 'rb') as src, open(target_file, 'wb') as dst:
        #     dst.write(src.read())   
        print(f"File copied successfully to {target_file}")
        return True
    except Exception as e:
        print(f"Error copying file: {e}")
        return False

def compress_image(source_file, target_file, quality) -> bool:
    """
    Compress an image file using Pillow with a specified quality.
    Args:
        source_file (str): Path to the source image file.
        target_file (str): Path where the compressed image will be saved.
        quality (int): Quality setting for the output image (0-100).
    """
    try:
        with Image.open(source_file) as img:
            img.thumbnail((400, 400))
            img.save(target_file, "webp", quality=quality, optimize=True)
        print(f"Image compressed successfully to {target_file}")
        return True
    except Exception as e:
        print(f"Error during image compression: {e}")
        return False

def compress_video(source_file, target_file, bitrate) -> bool:
    """
    Compress a video file using ffmpeg with a specified bitrate.
    Args:
        source_file (str): Path to the source video file.
        target_file (str): Path where the compressed video will be saved.
        bitrate (str): Bitrate for the output video (e.g., '900k' for 900 kbps).
    """
    try:
        (ffmpeg.input(source_file).output(target_file, video_bitrate=bitrate).run())
        print(f"Video compressed successfully to {target_file}")
        return True
    except ffmpeg.Error as e:
        print(f"Error during compression: {e.stderr.decode('utf8')}")
        return False


def compress_media_for_web(
    source_directory, output_directory, image_quality=80, video_bitrate="900k"
):
    """
    Iterates over media files (JPG, MP4) in a directory (recursively),
    aggressively compresses them for web use, and saves them to a new directory.
    Optimized for smaller video file sizes with more aggressive CRF and configurable audio bitrate.

    Args:
        source_directory (str): The path to the directory containing the media files.
        output_directory (str): The path where compressed files will be saved.
        image_quality (int): Quality setting for WebP images (0-100, higher is better).
                             Lower values mean more aggressive compression.
                             Default 80 is a good balance.
        video_bitrate (str): Bitrate for video compression (e.g., '900k' for 900 kbps).
                             Lower values mean more aggressive compression.
    """

    if not os.path.exists(source_directory):
        print(f"Error: Source directory '{source_directory}' does not exist.")
        return

    os.makedirs(output_directory, exist_ok=True)
    print(
        f"Starting media compression from '{source_directory}' to '{output_directory}'"
    )

    processed_count = 0
    skipped_count = 0
    error_count = 0

    for root, _, files in os.walk(source_directory):
        for filename in files:
            file_path = os.path.join(root, filename)
            relative_path = os.path.relpath(file_path, source_directory)
            name, ext = os.path.splitext(filename)
            ext = ext.lower()

            # Determine the output subdirectory to maintain original structure
            output_subdir = os.path.join(
                output_directory, os.path.dirname(relative_path)
            )
            os.makedirs(output_subdir, exist_ok=True)

            if ext in [".jpg", ".jpeg", ".png"]:
                output_file_path = os.path.join(output_subdir, f"{name}.webp")
                print(f"Compressing image: {file_path} -> {output_file_path}")
                if compress_image(file_path, output_file_path, image_quality):
                    processed_count += 1
                else:
                    error_count += 1
                # print(f"Skipping image compression for {file_path}")
                # output_file_path = os.path.join(output_subdir, filename)
                # if copy_file(file_path, output_file_path):
                #     processed_count += 1
                # else:
                #     error_count += 1
            elif ext == ".mp4":
                output_file_path = os.path.join(output_subdir, f"{name}.webm")
                print(f"Compressing video: {file_path} -> {output_file_path}")
                if compress_video(file_path, output_file_path, bitrate=video_bitrate):
                    processed_count += 1
                else:
                    error_count += 1
            else:
                print(f"Skipping unsupported file type: {file_path}")
                skipped_count += 1

    print("\n--- Compression Summary ---")
    print(f"Processed files: {processed_count}")
    print(f"Skipped files: {skipped_count}")
    print(f"Files with errors: {error_count}")
    print(f"Compressed files saved to: {output_directory}")


if __name__ == "__main__":
    import sys

    if len(sys.argv) < 3:
        print("Usage: python compressMedia.py <source_directory> <output_directory>")
        sys.exit(1)
    source_dir = sys.argv[1]
    output_dir = sys.argv[2]

    compress_media_for_web(
        source_dir, output_dir, image_quality=100, video_bitrate="2000k"
    )
    print("\nScript finished.")
