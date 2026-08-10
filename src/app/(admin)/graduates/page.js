// app/graduates/page.jsx

"use client";

import useGraduates from "@/hooks/useGraduates";

import GraduatesHeader from "@/components/graduates/GraduatesHeader";
import StatisticsCards from "@/components/graduates/StatisticsCards";
import PageContent from "@/components/graduates/PageContent";

import AddGraduateModal from "@/components/graduates/AddGraduateModal";
import DeleteGraduateModal from "@/components/graduates/DeleteGraduateModal";
import ViewGraduateModal from "@/components/graduates/ViewGraduateModal";

export default function GraduatesPage() {

  const {

    filteredGraduates,

    statistics,

    searchTerm,

    setSearchTerm,

    selectedStatus,

    setSelectedStatus,

    selectedGraduate,

    isAddOpen,

    isDeleteOpen,

    isViewOpen,

    setIsAddOpen,

    setIsDeleteOpen,

    setIsViewOpen,

    handleAddGraduate,

    handleEditGraduate,

    handleDeleteGraduate,

    handleViewGraduate,

    handleFavoriteGraduate,

    handleCommentGraduate,

    saveGraduate,

    deleteGraduate,

  } = useGraduates();

  return (

    <main className="min-h-screen bg-[#F5F0E8] p-4 md:p-6 xl:p-8">

      <GraduatesHeader
        onAddGraduate={handleAddGraduate}
      />

      <StatisticsCards
        total={statistics.total}
        active={statistics.active}
        alumni={statistics.alumni}
        averageProgress={statistics.averageProgress}
      />

      <PageContent
        graduates={filteredGraduates}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        onView={handleViewGraduate}
        onEdit={handleEditGraduate}
        onDelete={handleDeleteGraduate}
        onFavorite={handleFavoriteGraduate}
        onComment={handleCommentGraduate}
      />

      <AddGraduateModal
        open={isAddOpen}
        graduate={selectedGraduate}
        onClose={() => setIsAddOpen(false)}
        onSave={saveGraduate}
      />

      <DeleteGraduateModal
        open={isDeleteOpen}
        graduate={selectedGraduate}
        onClose={() => setIsDeleteOpen(false)}
        onDelete={deleteGraduate}
      />

      <ViewGraduateModal
        open={isViewOpen}
        graduate={selectedGraduate}
        onClose={() => setIsViewOpen(false)}
      />

    </main>

  );

}