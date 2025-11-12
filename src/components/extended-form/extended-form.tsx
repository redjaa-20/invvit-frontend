"use client";

import * as React from "react";
import {
  FormProvider,
  useFormContext,
  Controller,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "src/components/ui/form";
import { Input } from "src/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupInput,
} from "src/components/ui/input-group";
import { cn } from "src/lib/utils";

type ExtendedFormProps = {
  methods: any;
  onSubmit: (data: any) => void;
  className?: string;
  children: React.ReactNode;
};

const FormContext = React.createContext<any>(null);

export function ExtendedForm({
  methods,
  onSubmit,
  className,
  children,
}: ExtendedFormProps) {
  return (
    <FormContext.Provider value={methods}>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className={cn("space-y-6", className)}
        >
          {children}
        </form>
      </FormProvider>
    </FormContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/*                             FORM SUBCOMPONENTS                             */
/* -------------------------------------------------------------------------- */

function useFormMethods() {
  const ctx = React.useContext(FormContext);
  if (!ctx)
    throw new Error("Form.* components must be used inside <ExtendedForm>");
  return ctx;
}

/* -------------------------------------------------------------------------- */
/*                                   INPUT                                    */
/* -------------------------------------------------------------------------- */
type FormInputProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldPath<TFieldValues>;
  label?: string;
  placeholder?: string;
  description?: string;
  type?: string;
  disabled?: boolean;
  className?: string;
};

ExtendedForm.Input = function FormInput<TFieldValues extends FieldValues>({
  name,
  label,
  placeholder,
  description,
  type = "text",
  disabled,
  className,
}: FormInputProps<TFieldValues>) {
  const methods = useFormMethods();

  return (
    <FormField
      control={methods.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel className="mb-1">{label}</FormLabel>}
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              {...field}
              className="shadow-none"
            />
          </FormControl>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
};

/* -------------------------------------------------------------------------- */
/*                                INPUT GROUP                                 */
/* -------------------------------------------------------------------------- */
type FormInputGroupProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldPath<TFieldValues>;
  label?: string;
  placeholder?: string;
  startAddon?: React.ReactNode;
  endAddon?: React.ReactNode;
  description?: string;
  disabled?: boolean;
  className?: string;
};

ExtendedForm.InputGroup = function FormInputGroup<
  TFieldValues extends FieldValues
>({
  name,
  label,
  placeholder,
  startAddon,
  endAddon,
  description,
  disabled,
  className,
}: FormInputGroupProps<TFieldValues>) {
  const methods = useFormMethods();

  return (
    <FormField
      control={methods.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <InputGroup>
              {startAddon && (
                <InputGroupAddon>
                  {typeof startAddon === "string" ? (
                    <InputGroupText>{startAddon}</InputGroupText>
                  ) : (
                    startAddon
                  )}
                </InputGroupAddon>
              )}
              <InputGroupInput
                placeholder={placeholder}
                disabled={disabled}
                {...field}
              />
              {endAddon && (
                <InputGroupAddon align="inline-end">
                  {typeof endAddon === "string" ? (
                    <InputGroupText>{endAddon}</InputGroupText>
                  ) : (
                    endAddon
                  )}
                </InputGroupAddon>
              )}
            </InputGroup>
          </FormControl>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
};

/* -------------------------------------------------------------------------- */
/*                                TEXTAREA (OPSIONAL)                         */
/* -------------------------------------------------------------------------- */

ExtendedForm.Textarea = function FormTextarea<
  TFieldValues extends FieldValues
>({
  name,
  label,
  placeholder,
  description,
  disabled,
  className,
}: FormInputProps<TFieldValues>) {
  const { control } = useFormMethods();
  const Textarea = require("src/components/ui/textarea").Textarea;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea
              placeholder={placeholder}
              disabled={disabled}
              {...field}
            />
          </FormControl>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
};
