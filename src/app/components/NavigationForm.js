import { useState } from "react";

export default function NavigationForm({ refreshItems }) {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    const submit = async () => {
        await fetch("/api/navigation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, link }),
        });
        setName("");
        setLink("");
        refreshItems();
    };

    // @ts-ignore
    return (
        <form onSubmit={(e) => e.preventDefault() || submit()}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="Link" required />
            <button type="submit">Add</button>
        </form>
    );
}