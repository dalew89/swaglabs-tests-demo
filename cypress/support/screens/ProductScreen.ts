import { getClass, getTestID } from "../../utils/selectors";

export const ProductScreen = {
    sortDropdown: getTestID(`product_sort_container`),
    addToCartButton: getTestID(`add-to-cart-sauce-labs-backpack`),
    inventoryItemName: getClass(`inventory_item_name`),
    inventoryItemBox: getClass(`inventory_item`),
    itemDescription: getClass(`inventory_item_desc`),
    itemPrice: getClass(`inventory_item_price`),
}