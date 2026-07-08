import {SearchBar} from "@components/searchBar/searchBar";
import Image from "next/image";

export default async function Home() {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  //Core Endpoint
  const response = await fetch(`${apiUrl}/api/weatherforecast`, {
    cache: "no-store",
  });

  const data = await response.json();

  return (
    <div>
      <h1>Welcome to Trade Supplies</h1>
      <p>Search Below to find construction tools supplies for all types of construction trades.</p>
      <p>(Use the filter category to order your search based on your priorities.)</p>
      <SearchBar />
      <div>
        <h1>ASP.NET TEST JSON</h1>
        <p>{JSON.stringify(data, null, 2)}</p>
        <ul>
          {data.map((item: any) => (
            <li key={item.date}>
              <p>Date: {item.date}</p>
              <p>TemperatureC: {item.temperatureC}</p>
              <p>TemperatureF: {item.temperatureF}</p>
              <p>Summary: {item.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
