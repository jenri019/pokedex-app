import { useState } from "react";

export const useVisible = (initialValue = true) => {

    const [visible, setvVisible] = useState(initialValue)

    const changeVisibility = () => {
        (visible) ? setvVisible(false) : setvVisible(true);
    }

    return {
        visible: visible,
        changeVisibility: changeVisibility,
    }
}