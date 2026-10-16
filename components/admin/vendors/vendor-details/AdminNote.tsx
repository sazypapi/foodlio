"use client";
import {
  CustomDialog,
  CustomDialogContent,
  CustomDialogHeader,
  CustomDialogTitle,
  CustomDialogTrigger,
} from "@/components/ui/custom-dialog";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import FormContainer from "@/components/form/FormContainer";
import { deleteAdminNote, editAdminNote } from "@/utils/actions";
import TextArea from "@/components/form/TextArea";
import { IconButton, SubmitButton } from "@/components/form/Buttons";
import { serializedVendor } from "@/components/vendor/create-new-meal/CreateMealFormContainer";
function AdminNote({ vendorData }: { vendorData: serializedVendor }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg p-4 sm:col-span-2">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
        Admin note
      </p>
      {vendorData.adminNote ? (
        <p className="text-sm text-gray-700">{vendorData.adminNote}</p>
      ) : (
        <p className="text-sm text-gray-400 italic">No notes added yet.</p>
      )}
      <div
        className={`w-full flex ${vendorData.adminNote ? "justify-between" : "justify-end"} mt-5 items-center`}
      >
        {vendorData.adminNote && (
          <FormContainer action={deleteAdminNote}>
            <input
              type="hidden"
              name="clerkId"
              value={vendorData.clerkUserId}
            />
            <IconButton actionType="delete" />
          </FormContainer>
        )}
        <div>
          <CustomDialogTrigger onClick={() => setOpen(true)}>
            <FiEdit />
          </CustomDialogTrigger>
          <CustomDialog open={open} onClose={() => setOpen(false)}>
            <CustomDialogContent>
              <CustomDialogHeader>
                <CustomDialogTitle>Leave your note</CustomDialogTitle>
              </CustomDialogHeader>
              <FormContainer action={editAdminNote}>
                <input
                  type="hidden"
                  name="clerkId"
                  value={vendorData.clerkUserId}
                />
                <TextArea
                  name="adminNote"
                  defaultValue={vendorData.adminNote || ""}
                  labelText="Admin Note"
                  placeholder="Enter your notes on this vendor"
                />
                <SubmitButton
                  text={vendorData.adminNote ? "Update Note" : "Add Note"}
                  loadingText={
                    vendorData.adminNote ? "Update Note" : "Add Note"
                  }
                />
              </FormContainer>
            </CustomDialogContent>
          </CustomDialog>{" "}
        </div>
      </div>
    </div>
  );
}

export default AdminNote;
