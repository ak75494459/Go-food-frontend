import React , {useState, useEffect} from "react";
import CardItem from './CardItem'

export default function Cards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getCardItem();
    }, []);

    const getCardItem = async () => {
        try {
            let result = await fetch(`${process.env.REACT_APP_BASE_API_URL}/api/fooddata`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            setCards(result[0]);
            console.log(result[0])
            console.warn("foodItem:", result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    console.log(process.env.REACT_APP_BASE_API_URL)
    return (
        <>
            {cards.map((item, index) => <CardItem key={index} item={item} />)}
        </>
    );
}