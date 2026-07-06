import SearchBar from "@components/searchBar/searchBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Trade Supplies</h1>
      <p>Search Below to find construction tools supplies for all types of construction trades.</p>
      <p>(Use the filter category to order your search based on your priorities.)</p>
      <SearchBar />
    </div>
  );
}
