const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_KEY;

const uploadImage = async (imageFile) => {
  if (!IMGBB_API_KEY) {
    throw new Error("key not found");
  }

  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();
  const imageUrl = data.data.url;

  return imageUrl;
};

export default uploadImage;
