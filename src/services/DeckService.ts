import axios from "axios";
import { API_URL } from '../config/config';

class DeckService {
    public async save({ name }: { name: string }): Promise<void> {
        try {
            await axios.post(`${API_URL}/decks`, { name });
            alert('Sucesso');
        } catch (error) {
            console.log(error);
        }
    }
}

export const deckService = new DeckService();