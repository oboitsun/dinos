import React from "react";
import styles from "./SupplyTable.module.scss";
export default function SupplyTable({ tableData }) {
  const total = { ...tableData[0] };
  const rarityPercents = {
    rest: 0,
    ultraRare: 0,
    legendary: 0,
    total: 0,
  };
  for (const [key, val] of Object.entries(total)) {
    total[key] = val * tableData.length;

    rarityPercents.rest += ["colored", "earth", "wind", "fire", "ice", "albino"].includes(key)
      ? total[key]
      : 0;
  }

  total.name = "total";
  total.total = Object.values(total).reduce((a, b) => {
    return a + (typeof b === "number" ? b : 0);
  }, 0);

  rarityPercents.legendary = total.legendary;
  rarityPercents.ultraRare = total.ultraRare;
  console.log({ rarityPercents });
  return (
    <div className={styles.tableWrapper}>
      <table>
        <tr>
          <th>Dinos</th>
          <th>8coloured skins</th>
          <th>albino</th>
          <th>earth</th>
          <th>wind</th>
          <th>fire</th>
          <th>ice</th>
          <th>ultra rare</th>
          <th>legendary</th>
          <th>Total</th>
        </tr>
        {tableData.map((row) => (
          <tr key={row.name}>
            {Object.entries(row).map((data) => {
              const [key, val] = data;
              return <td key={`${key}_${row.name}`}>{val}</td>;
            })}
            <td key={`${row.name}_total`}>
              {Object.values(row).reduce((a, b) => {
                return a + (typeof b === "number" ? b : 0);
              }, 0)}
            </td>
          </tr>
        ))}
        <tr className={styles.total}>
          {Object.entries(total).map((data) => {
            const [key, val] = data;
            return <td key={`${key}_${total.name}`}>{val}</td>;
          })}
          {/* <td key={`${total.name}_total`}>
            {Object.values(total).reduce((a, b) => {
              return a + (typeof b === "number" ? b : 0);
            }, 0)}
          </td> */}
        </tr>
        <tr className={styles.rarity}>
          <td>Rarity</td>
          <td colspan="6">
            <span className={styles.digits}>
              {" "}
              {((rarityPercents.ultraRare * 100) / total.total).toFixed(1)}
            </span>
          </td>

          <td>
            <span className={styles.digits}>
              {" "}
              {((rarityPercents.ultraRare * 100) / total.total).toFixed(1)}
            </span>
          </td>
          <td>
            {((rarityPercents.legendary * 100) / total.total).toFixed(1)}
            <span>%</span>
          </td>
          <td>
            <span className={styles.digits}> 100</span>
          </td>
        </tr>
      </table>
    </div>
  );
}
