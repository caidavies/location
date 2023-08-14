const getListings = async () => {
    try {
      const response = await fetch(
        'https://caid1.sg-host.com/wp-json/wp/v2/listing?acf_format=standard',
      );
      const json = await response.json();
      const acfDataList = json.map(item => item.acf);
      return acfDataList;
    } catch (error) {
      console.error(error);
    }
  };

  export { getListings };