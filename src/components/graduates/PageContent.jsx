// components/graduates/PageContent.jsx

"use client";

import GraduatesToolbar from "./GraduatesToolbar";
import GraduateTable from "./GraduateTable";

export default function PageContent({

  graduates,

  searchTerm,

  setSearchTerm,

  selectedStatus,

  setSelectedStatus,

  onView,

  onEdit,

  onDelete,

  onFavorite,

  onComment,

}) {
  return (
    <>

      <GraduatesToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />

      <GraduateTable
       graduates={graduates}
       onEdit={onEdit}
       onDelete={onDelete}
/>

    </>
  );
}