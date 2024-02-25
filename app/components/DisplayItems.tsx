import React from "react";
import { Table } from "@radix-ui/themes";
import { getGoogleSheetsData } from "./gsheets";

const DisplayItems = async () => {
  const range = `15 Pro Max 256GB!A2:F`;
  const posts = await getGoogleSheetsData(range);
  //   console.log(posts);
  function getTagsFromText(text: string): string[] {
    return text.split(",").map((tag) => tag.trim());
  }
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>TÊN SẢN PHẨM</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>ĐƠN GIÁ</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>T TRẠNG</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>PART</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>X XỨ</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>GHI CHÚ</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {posts?.map((item, index) => (
          <Table.Row>
            <Table.RowHeaderCell>{item[0]}</Table.RowHeaderCell>
            <Table.Cell>{item[1]}</Table.Cell>
            <Table.Cell>{item[2]}</Table.Cell>
            <Table.Cell>{item[3]}</Table.Cell>
            <Table.Cell>{item[4]}</Table.Cell>
            <Table.Cell>{item[5]}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default DisplayItems;
