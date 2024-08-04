import IconWrapper from '@/components/shared/IconWrapper';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const customers = [
  {
    id: 1,
    customerName: 'John Doe',
    profileImage: 'https://picsum.photos/200/300',
    orderNo: 'ORD001',
    amount: '$100.00',
    status: 'Delivered',
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    profileImage: 'https://picsum.photos/200/301',
    orderNo: 'ORD002',
    amount: '$200.00',
    status: 'Pending',
  },
  {
    id: 3,
    customerName: 'Bob Johnson',
    profileImage: 'https://picsum.photos/200/302',
    orderNo: 'ORD003',
    amount: '$50.00',
    status: 'Cancelled',
  },
  {
    id: 4,
    customerName: 'Alice Brown',
    profileImage: 'https://picsum.photos/200/303',
    orderNo: 'ORD004',
    amount: '$150.00',
    status: 'Delivered',
  },
  {
    id: 5,
    customerName: 'Mike Davis',
    profileImage: 'https://picsum.photos/200/304',
    orderNo: 'ORD005',
    amount: '$250.00',
    status: 'Pending',
  },
  {
    id: 6,
    customerName: 'Emily Taylor',
    profileImage: 'https://picsum.photos/200/305',
    orderNo: 'ORD006',
    amount: '$75.00',
    status: 'Cancelled',
  },
  {
    id: 7,
    customerName: 'David Lee',
    profileImage: 'https://picsum.photos/200/306',
    orderNo: 'ORD007',
    amount: '$300.00',
    status: 'Delivered',
  },
  {
    id: 8,
    customerName: 'Sarah Kim',
    profileImage: 'https://picsum.photos/200/307',
    orderNo: 'ORD008',
    amount: '$120.00',
    status: 'Pending',
  },
  {
    id: 9,
    customerName: 'Kevin White',
    profileImage: 'https://picsum.photos/200/308',
    orderNo: 'ORD009',
    amount: '$180.00',
    status: 'Cancelled',
  },
  {
    id: 10,
    customerName: 'Lisa Nguyen',
    profileImage: 'https://picsum.photos/200/309',
    orderNo: 'ORD010',
    amount: '$220.00',
    status: 'Delivered',
  },
];

export default function CustomerTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold text-white">Customer Name</TableHead>
          <TableHead className="font-bold text-white">Order No.</TableHead>
          <TableHead className="font-bold text-white">Amount</TableHead>
          <TableHead className="font-bold text-white">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.map((customer) => (
          <TableRow key={customer.id} className="h-14 hover:bg-slate-700">
            <TableCell className="border-t border-gray-200">
              <div className="flex items-center justify-start gap-2">
                <img src={customer.profileImage} alt={customer.customerName} className="h-8 w-8 rounded-full" />
                <p className="text-sm">{customer.customerName}</p>
              </div>
            </TableCell>
            <TableCell className="border-t border-gray-200">{customer.orderNo}</TableCell>
            <TableCell className="border-t border-gray-200">{customer.amount}</TableCell>
            <TableCell className="border-t border-gray-200">
              <IconWrapper
                className={`flex h-7 w-full items-center justify-center rounded-xl ${customer.status === 'Delivered' ? 'bg-green-400 bg-opacity-20 text-green-600' : ''} ${customer.status === 'Cancelled' ? 'bg-red-400 bg-opacity-20 text-red-600' : ''} ${customer.status === 'Pending' ? 'bg-yellow-400 bg-opacity-20 text-yellow-600' : ''} `}
              >
                {customer.status}
              </IconWrapper>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
