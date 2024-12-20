import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useCallback } from "react";
import { commentsSchema } from "../../hooks/validationSchema";
import { CommentFormContent } from "./CommentFormContent";

export const CommentForm = ({ handleAddComment }) => {
  const formMethods = useForm({ resolver: zodResolver(commentsSchema) });

  const [showInput, setShowInput] = useState(false);

  const openInput = useCallback(() => {
    setShowInput(true);
  }, []);

  const hideInput = useCallback(() => {
    formMethods.reset();
    setShowInput(false);
  }, []);

  const onSubmit = (data) => {
    handleAddComment(data);
    hideInput();
  };

  return (
    <FormProvider {...formMethods}>
      <CommentFormContent
        onSubmit={formMethods.handleSubmit(onSubmit)}
        showInput={showInput}
        openInput={openInput}
        hideInput={hideInput}
      />
    </FormProvider>
  );
};
