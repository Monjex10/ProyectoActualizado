const getAlbums = async () => {
  try {
    const response = await axios.get("../../album/todos")
    console.log(response);
  } catch (error) {
    console.log(error);
  }

}
