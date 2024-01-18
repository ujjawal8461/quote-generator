import React, { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import axios from "axios";

function Card() {
  const [Quote, setQuote] = useState("");
  const [Author, setAuthor] = useState("");
  const getData = async () => {
    const responce = await axios.get("https://type.fit/api/quotes");
    const data = responce.data;
    const n = data.length;
    const randomNum = Math.floor(Math.random() * n);

    if (responce.data[randomNum].author !== null) {
      const modifiedAuthor = responce.data[randomNum].author
        .replace(/,\s*type\.fit\s*$/, "")
        .trim();
      setAuthor(modifiedAuthor);
    } else {
      setAuthor("");
    }

    setQuote(data[randomNum].text);
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-blue-500 rounded-xl overflow-hidden shadow-xl p-6 mt-32 ">
        <div className="text-2xl font-bold text-white mb-2">Todas's Quote</div>
        <p className="text-white font-semibold text-base">"{Quote}"</p>
        <div className="border-t border-white my-4"></div>
        <div className="flex items-center justify-between">
          <div className="text-white font-semibold">-By {Author}</div>
          <button
            onClick={getData}
            className=" text-white bg-white rounded-full p-1"
          >
            <GrFormNextLink size={32} className="text-blue-500" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
