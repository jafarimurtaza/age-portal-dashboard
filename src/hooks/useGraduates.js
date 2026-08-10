// hooks/useGraduates.js

"use client";

import { useMemo, useState } from "react";
import graduatesData from "@/data/graduates";

export default function useGraduates() {

  const [graduates, setGraduates] = useState(graduatesData);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedStatus, setSelectedStatus] = useState("All");

  const [selectedGraduate, setSelectedGraduate] = useState(null);

  const [isAddOpen, setIsAddOpen] = useState(false);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [isViewOpen, setIsViewOpen] = useState(false);

  const filteredGraduates = useMemo(() => {

    return graduates.filter((graduate) => {

      const matchesSearch =

        graduate.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||

        graduate.email
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||

        graduate.role
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesStatus =

        selectedStatus === "All"

          ? true

          : graduate.status === selectedStatus;

      return matchesSearch && matchesStatus;

    });

  }, [

    graduates,

    searchTerm,

    selectedStatus,

  ]);

  const statistics = useMemo(() => {

    const total = graduates.length;

    const active = graduates.filter(
      (g) => g.status === "Active"
    ).length;

    const alumni = graduates.filter(
      (g) => g.status === "Alumni"
    ).length;

    const averageProgress =

      total === 0

        ? 0

        : Math.round(

            graduates.reduce(

              (sum, graduate) =>

                sum + graduate.progress,

              0

            ) / total

          );

    return {

      total,

      active,

      alumni,

      averageProgress,

    };

  }, [graduates]);

  function handleAddGraduate() {

    setSelectedGraduate(null);

    setIsAddOpen(true);

  }

  function handleEditGraduate(graduate) {

    setSelectedGraduate(graduate);

    setIsAddOpen(true);

  }

  function handleViewGraduate(graduate) {

    setSelectedGraduate(graduate);

    setIsViewOpen(true);

  }

  function handleDeleteGraduate(graduate) {

    setSelectedGraduate(graduate);

    setIsDeleteOpen(true);

  }

  function handleFavoriteGraduate(graduate) {

    setGraduates((prev) =>

      prev.map((item) =>

        item.id === graduate.id

          ? {

              ...item,

              favorite: !item.favorite,

            }

          : item

      )

    );

  }

  function handleCommentGraduate(graduate) {

    alert(`Comments for ${graduate.name}`);

  }

  function saveGraduate(graduate) {

    if (graduate.id) {

      setGraduates((prev) =>

        prev.map((item) =>

          item.id === graduate.id

            ? graduate

            : item

        )

      );

    } else {

      setGraduates((prev) => [

        ...prev,

        {

          ...graduate,

          id:
            prev.length === 0
              ? 1
              : Math.max(...prev.map((g) => g.id)) + 1,

          favorite: false,

          comments: 0,

        },

      ]);

    }

    setIsAddOpen(false);

  }

  function deleteGraduate() {

    setGraduates((prev) =>

      prev.filter(

        (graduate) =>

          graduate.id !== selectedGraduate.id

      )

    );

    setIsDeleteOpen(false);

  }

  return {

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

  };

}