import { useState } from "react";
interface DestinoType {
    id: number;
    name: string;
    type: string;
    description: string;
    image: string;
    activitys: string[];
    price: number;

}
export const usePreviewSelection = () => {
    const [selected, setSelected] = useState<DestinoType | null>(null);
    const selectItem = (itm: DestinoType) => setSelected(itm);
    const clearSelection = () => setSelected(null);
    console.log('Selected:', selected); // Justo después del hook
    return { selected, selectItem, clearSelection }

}