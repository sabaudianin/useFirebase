import { TextField, Button, Box, Collapse } from "@mui/material";
import { useFormContext } from "react-hook-form";

export const CommentFormContent = ({
  onSubmit,
  showInput,
  openInput,
  hideInput,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Box
      sx={{
        marginTop: 1,
        marginBottom: 1,
      }}
    >
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{
          background: "#f2f2f2",
          borderRadius: 2,
          border: "2px  solid #bfbfbf",
        }}
      >
        {" "}
        <TextField
          placeholder="Add Comment"
          {...register("description", {
            required: "Description is required",
          })}
          error={!!errors.description}
          helperText={errors.description?.message}
          fullWidth
          multiline
          rows={2}
          onFocus={openInput}
        />
        {showInput && (
          <Collapse
            in={showInput}
            timeout={{ enter: 900, exit: 600 }}
            sx={{
              transition: "transform 0.5s ease, opacity 0.5s ease",
            }}
          >
            <TextField
              placeholder="Author"
              {...register("author", { required: "Author is required" })}
              error={!!errors.author}
              helperText={errors.author?.message}
              fullWidth
              sx={{ marginBottom: "1rem" }}
            />
            <Button
              type="submit"
              sx={{ color: "green" }}
            >
              Submit
            </Button>
            <Button
              type="button"
              onClick={hideInput}
              sx={{ color: "red" }}
            >
              Cancel
            </Button>
          </Collapse>
        )}
      </Box>
    </Box>
  );
};
