const getCategories = async () => {
  try {
    const response = await fetch(
      'https://caid1.sg-host.com/wp-json/wp/v2/venue?acf_format=standard',
    );
    const json = await response.json();
    console.log(json);
    const categoryNames = json.map(item => item.toString()); // Extract category names
    return categoryNames;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getCategories };
