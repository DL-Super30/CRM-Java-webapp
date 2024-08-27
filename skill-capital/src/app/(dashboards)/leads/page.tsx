
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { leadsData,  role,  } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Lead = {
  id: number;
  name: string;
  email?: string;
  leadStatus: string;
  phone: string;
  stack: string;
  course: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Lead Status",
    accessor: "leadStatus",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Stack",
    accessor: "stack",
    className: "hidden lg:table-cell",
  },
  {
    header: "Course",
    accessor: "course",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const LeadListPage = () => {
  const renderRow = (item: Lead) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name} </h3>
          <p className="text-xs text-gray-500">{item.email} </p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.leadStatus}</td>
      <td className="hidden md:table-cell">{item.phone.replace("+91", "+91 ")}</td>
      <td className="hidden md:table-cell">{item.stack}</td>
      <td className="hidden md:table-cell">{item.course}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="leads" type="update" data={item} />
              <FormModal table="leads" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 m-4 mt-0 flex-1 ">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Leads</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end ">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png " alt="" width={20} height={20} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png " alt="" width={20} height={20} />
            </button>
            {role === "admin" && <FormModal table="leads" type="create" />}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={leadsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default LeadListPage;
