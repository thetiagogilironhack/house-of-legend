const BuildDeleteButton = ({ build, fetchAll }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/builds/${build.id}`,
        {
          method: "DELETE",
        }
      );
      console.log(response);
      if (response.ok) {
        const parsed = await response.json();
        console.log(parsed);
        if (fetchAll) {
          await fetchAll();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button type="button" onClick={handleDelete} className="builds-checkbox-button">
      delete
    </button>
  );
};

export default BuildDeleteButton;
