import React, { useState } from "react";
import "../styles/dictionary.css"
const Dictionary = () => {
    const [data, setData] = useState([]);
    const [word, setWord] = useState("");
    const fetchData = async () => {
        try {
            const response = await fetch(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            );
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearch = () => {
        fetchData();
    };

    // Lấy thông tin từ dữ liệu
    const { word: wordData, phonetic, phonetics, meanings } = data[0] || {};
    const partOfSpeech = meanings && meanings[0] && meanings[0].partOfSpeech;
    return (
        <div>
            <h2>Trang chủ</h2>
            <h3 className="dictionary-title">Từ điển API:</h3>
            <div>
                <label className="input-search">Nhập từ:</label>
                <input className="box"
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                />
                <button onClick={handleSearch} className="button-find" >Tìm kiếm</button>
            </div>

            {/* Render thông tin từ API */}
            {data.length > 0 ? (
                <div className="body-dictionary">
                    <div>
                        <label htmlFor="word">Từ:</label>
                        <input type="text" id="word" value={wordData} disabled />
                    </div>
                    <div>
                        <label htmlFor="phonetic">Phiên âm:</label>
                        <input type="text" id="phonetic" value={phonetic} disabled />
                    </div>
                    <div>
                        <label htmlFor="partOfSpeech">Phần ngữ loại:</label>
                        <input
                            type="text"
                            id="partOfSpeech"
                            value={partOfSpeech}
                            disabled
                        />
                    </div>
                    {/* Render thông tin `phonetics` */}
                    {phonetics &&
                        phonetics.map((phonetic, index) => (
                            <div key={index}>
                                <label htmlFor={`phonetic${index}`}>Phiên âm {index + 1}:</label>
                                <input
                                    type="text"
                                    id={`phonetic${index}`}
                                    value={phonetic.text}
                                    disabled
                                />
                            </div>
                        ))}
                    {/* Render thông tin `example` */}
                    {meanings &&
                        meanings.map((meaning, index) => (
                            <div key={index}>
                                <label htmlFor={`example${index}`}>Ví dụ:</label>
                                <input className="example-dictionary"
                                    type="text"
                                    id={`example${index}`}
                                    value={meaning.definitions[0].example}
                                    disabled
                                />
                            </div>
                        ))}
                </div>
            ) : (
                <p>Không có dữ liệu</p>
            )}
        </div>
    );
};

export default Dictionary;