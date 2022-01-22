import { ALERT_FROM_CART } from "./actionTypes"

export const alertAction = (item) => {
    return {
        type:ALERT_FROM_CART,
        payload:item
    }
}