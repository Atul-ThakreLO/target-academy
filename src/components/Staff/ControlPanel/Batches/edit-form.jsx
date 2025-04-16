import { Button } from "@/components/ui/button";
import InputField from "@/components/Utils/input-field";
import { useBatchUpdate } from "@/Hooks/use-batch";
import { Edit, Loader, Save, X } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

const EditForm = ({ data, setEdit }) => {
    console.log(data);
    
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: data.id,
      name: data.name,
    },
  });

  const mutation = useBatchUpdate();

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      setEdit(false)
    }
  }, [mutation.isSuccess]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-between items-center w-full"
    >
      <InputField
        type={"text"}
        id={"name"}
        name={"name"}
        register={register}
        error={errors.name}
      />
      <div>
        <Button>
          {mutation.isPending ? (
            <Loader className="animate-spin" />
          ) : (
            <>
              <Save /> Save
            </>
          )}
        </Button>
        <Button variant="Ghost" type="button" onClick={() => setEdit(false)}>
          <X />
        </Button>
      </div>
    </form>
  );
};

export default EditForm;
