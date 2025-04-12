import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config/config";
import userApi from "../../config/userApi";
import Select from "../../components/Form/Select";
import CountryTable from "./CountryTable";

const Country = () => {
  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);

  const [countryId, setCountryId] = useState("");
  const [stateId, setStateId] = useState("");
  const [cityId, setCityId] = useState("");

  const [submittedList, setSubmittedList] = useState([]);

  const [isEditMode, setIsEditMode] = useState(false);
  const [editItemIndex, setEditItemIndex] = useState(null);

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      const countryRes = await axios.get(`${config.URL}${userApi.country}`, {
        headers,
      });
      const stateRes = await axios.get(`${config.URL}${userApi.state}`, {
        headers,
      });
      const cityRes = await axios.get(`${config.URL}${userApi.city}`, {
        headers,
      });

      setCountryData(countryRes.data.data);
      setStateData(stateRes.data.data);
      setCityData(cityRes.data.data);

      const stored = localStorage.getItem("submittedData");
      if (stored) {
        setSubmittedList(JSON.parse(stored));
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedCountry = countryData.find(
      (c) => String(c.countryId) === String(countryId)
    );
    const selectedState = stateData.find(
      (s) => String(s.stateId) === String(stateId)
    );
    const selectedCity = cityData.find(
      (c) => String(c.cityId) === String(cityId)
    );

    const newData = {
      country: selectedCountry?.countryName || "Not selected",
      state: selectedState?.stateName || "Not selected",
      city: selectedCity?.cityName || "Not selected",
    };

    const updatedList = [...submittedList];

    if (isEditMode && editItemIndex !== null) {
      updatedList[editItemIndex] = newData;
      setIsEditMode(false);
      setEditItemIndex(null);
    } else {
      updatedList.push(newData);
    }

    setSubmittedList(updatedList);
    localStorage.setItem("submittedData", JSON.stringify(updatedList));

    setCountryId("");
    setStateId("");
    setCityId("");
  };

  const handleEdit = (index) => {
    const item = submittedList[index];

    const selectedCountry = countryData.find(
      (c) => c.countryName === item.country
    );
    const selectedState = stateData.find((s) => s.stateName === item.state);
    const selectedCity = cityData.find((c) => c.cityName === item.city);

    setCountryId(selectedCountry?.countryId || "");
    setStateId(selectedState?.stateId || "");
    setCityId(selectedCity?.cityId || "");

    setIsEditMode(true);
    setEditItemIndex(index);
  };

  const handleDelete = (index) => {
    // Create a copy of the submittedList
    const updatedList = [...submittedList];

    // Remove the item from the array
    updatedList.splice(index, 1);

    // Remove the old list from localStorage
    localStorage.removeItem("submittedData");

    // Save the updated list back to localStorage
    localStorage.setItem("submittedData", JSON.stringify(updatedList));

    // Update the state with the new list
    setSubmittedList(updatedList);
  };
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-bold mb-4">Country Page</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-row items-center space-x-4"
      >
        <Select
          label="Country"
          id="country"
          name="country"
          value={countryId}
          onChange={(e) => setCountryId(e.target.value)}
          country_option={countryData.map((c) => ({
            id: c.countryId,
            name: c.countryName,
          }))}
        />
        <Select
          label="State"
          id="state"
          name="state"
          value={stateId}
          onChange={(e) => setStateId(e.target.value)}
          country_option={stateData.map((s) => ({
            id: s.stateId,
            name: s.stateName,
          }))}
        />
        <Select
          label="City"
          id="city"
          name="city"
          value={cityId}
          onChange={(e) => setCityId(e.target.value)}
          country_option={cityData.map((c) => ({
            id: c.cityId,
            name: c.cityName,
          }))}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {isEditMode ? "Update" : "Submit"}
        </button>
      </form>

      <CountryTable
        submittedList={submittedList}
        onEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Country;
