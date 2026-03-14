import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const customers = [
  { id: 1, name: "Budi Santoso", phone: "0812000001", address: "Jl. Melati 10" },
  { id: 2, name: "Siti Aminah", phone: "0812000002", address: "Jl. Kenanga 8" }
];

export default function CustomersPage() {
  return (
    <Card>
      <CardHeader><CardTitle>Data Pelanggan</CardTitle></CardHeader>
      <CardContent>
        <Table>
          <TableHeader><TableRow><TableHead>Nama</TableHead><TableHead>Telepon</TableHead><TableHead>Alamat</TableHead></TableRow></TableHeader>
          <TableBody>{customers.map((customer) => <TableRow key={customer.id}><TableCell>{customer.name}</TableCell><TableCell>{customer.phone}</TableCell><TableCell>{customer.address}</TableCell></TableRow>)}</TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
