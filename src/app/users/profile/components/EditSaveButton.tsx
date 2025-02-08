const EditSaveButton = ({ isEditing, onEdit, onSave }: any) => (
  <button onClick={isEditing ? onSave : onEdit} className="text-blue-500 hover:text-blue-700">
    {isEditing ? "Save" : "Edit"}
  </button>
);

export default EditSaveButton;