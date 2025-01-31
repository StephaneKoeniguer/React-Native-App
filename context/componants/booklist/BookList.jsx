import { useContext } from "react";
import { Text } from "react-native";
import { BookContext } from "@/contexts/BookContext";

export function BookList() {

    const { books, currency } = useContext(BookContext);

    return (
        <>
            {books.map((book) => (
                <Text key={book.id}>
                    {book.title} - {book.price} - {currency}
                </Text>
            ))}
        </>
    );

}