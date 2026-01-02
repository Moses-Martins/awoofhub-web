import {
  FormControl,
  FormHelperText,
  FormLabel,
  forwardRef,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';

import {
  FieldError,
  UseFormRegister,
} from 'react-hook-form';

export type InputFieldProps = {
  type?: 'text' | 'email' | 'password' | 'textarea';
  label?: string;
  error?: FieldError;
  icon?: React.ReactNode;
  placeholder?: string;
  compulsory?: boolean
} & Partial<
  ReturnType<UseFormRegister<Record<string, unknown>>>
>;

export const InputField = forwardRef(
  (props: InputFieldProps, ref) => {
    const {
      type = 'text',
      label,
      error,
      icon,
      placeholder,
      compulsory,
      ...inputProps
    } = props;

    return (
      <FormControl>
        {label &&
          <FormLabel className="font-baloo text-lg">
            {label}
            {compulsory && <span className="text-red-500"> *</span>}
          </FormLabel>}
        {type === 'textarea' ? (
          <Textarea
            bg="white"
            rows={8}
            {...inputProps}
            ref={ref}
          />
        ) : (
          <InputGroup>
            {icon && (
              <InputLeftElement pointerEvents="none" className="mx-3 my-5">
                {icon}
              </InputLeftElement>
            )}
            <Input
              bg="white"
              type={type}
              placeholder={placeholder}
              className={`mt-2 w-full px-3 py-2 ${icon ? 'pl-12' : ''} border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-lg font-baloo`}
              {...inputProps}
              ref={ref}
            />
          </InputGroup>
        )}
        {error && (
          <FormHelperText className="text-red-500 text-left text-xs mt-1">
            {error.message}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
);