import { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";

export const TextDecrypt = (props: {text: string}) => {
    const result = useDencrypt();

    useEffect(() => {
        const updateText = () => {
            result[1](props.text || "");
        };

        const action = setTimeout(updateText, 0);

        return () => clearTimeout(action);
    }, [result[1], props.text]);

    return (
        <p>
          {result[0]}
        </p>
    );
};
