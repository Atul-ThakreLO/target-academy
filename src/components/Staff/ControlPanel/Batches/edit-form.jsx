import { Button } from "@/components/ui/button";
import InputField from "@/components/Utils/input-field";
import { useBatchUpdate } from "@/Hooks/use-batch";
import { Loader, Save, X } from "lucide-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const EditForm = ({ data, setEdit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: data.id,
      name: data.name,
      session: data.session,
    },
  });

  const mutation = useBatchUpdate();

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      setEdit(false);
    }
  }, [mutation.isSuccess]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-between items-center w-full gap-2"
    >
      <InputField
        type={"text"}
        id={"name"}
        name={"name"}
        register={register}
        error={errors.name}
      />
      <InputField
        type={"text"}
        name={"session"}
        register={register}
        id={"session"}
        error={errors.session}
      />
      <div className="flex gap-1">
        <Button>
          {mutation.isPending ? (
            <Loader className="animate-spin" />
          ) : (
            <>
              <Save /> Save
            </>
          )}
        </Button>
        <Button variant="Ghost" type="button" onClick={() => setEdit(null)}>
          <X />
        </Button>
      </div>
    </form>
  );
};

export default EditForm;
