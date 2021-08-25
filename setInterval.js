useEffect(() => {
  let intervalId;

  const fetchData = async () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        setIcon(
          `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );
      })
      .catch((error) => console.log(error));

    intervalId = setTimeout(fetchData, 10000);
  };

  fetchData();

  return () => {
    if (intervalId) {
      clearTimeout(intervalId);
    }
  };
}, [url]);
