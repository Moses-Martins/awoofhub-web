"use client"
import { NEXT_PUBLIC_GOOGLE_MAP_API_KEY } from '@/config/constants';
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/react';
import { importLibrary, setOptions } from "@googlemaps/js-api-loader";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { debounce } from 'lodash';
import { useEffect, useMemo, useState } from 'react';

setOptions({
    key: NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
});

export const GoogleAutocompleteNew = ({ label, error, compulsory, onPlaceSelect, value }: any) => {
    const [inputValue, setInputValue] = useState('');
    const [options, setOptionsList] = useState<readonly any[]>([]);
    const [sessionToken, setSessionToken] = useState<any>(null);

    useEffect(() => {
        const setup = async () => {
            // 2. Using the new importLibrary syntax you found
            const { AutocompleteSessionToken } = await importLibrary("places") as google.maps.PlacesLibrary;
            setSessionToken(new AutocompleteSessionToken());
        };
        setup();
    }, []);

    useEffect(() => {
        if (value && typeof value === 'string') {
            setInputValue(value);
        }
    }, [value]);

    const fetchSuggestions = useMemo(
        () =>
            debounce(async (input: string) => {
                if (!input || !sessionToken) return;

                // 3. Import the library using the new method
                const { AutocompleteSuggestion } = await importLibrary("places") as google.maps.PlacesLibrary;

                const { suggestions } = await AutocompleteSuggestion.fetchAutocompleteSuggestions({
                    input,
                    sessionToken,
                });

                setOptionsList(suggestions);
            }, 400),
        [sessionToken]
    );

    useEffect(() => {
        fetchSuggestions(inputValue);
    }, [inputValue, fetchSuggestions]);

    return (
        <FormControl isInvalid={!!error} className="w-full mb-4">
            {label && (
                <FormLabel className="font-baloo text-lg">
                    {label} {compulsory && <span className="text-red-500">*</span>}
                </FormLabel>
            )}

            <Autocomplete
                options={options}
                value={value || ''}
                getOptionLabel={(option) => {
                    if (typeof option === 'string') return option;

                    if (option?.placePrediction?.text?.text) {
                        return option.placePrediction.text.text;
                    }

                    return "";
                }}
                filterOptions={(x) => x}
                autoComplete
                includeInputInList
                clearOnBlur
                noOptionsText="No locations found"
                onChange={async (event, newValue) => {
                    if (newValue) {
                        const place = newValue.placePrediction.toPlace();

                        await place.fetchFields({
                            fields: ['formattedAddress']
                        });

                        if (typeof onPlaceSelect === 'function') {
                            onPlaceSelect(place.formattedAddress);
                        }
                    } else {
                        onPlaceSelect("");
                    }
                }}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        placeholder="Search address..."
                        slotProps={{
                            input: {
                                ...params.InputProps,
                                disableUnderline: true,
                                className: `
                  !mt-2 !w-full !px-3 !py-2 !bg-[#F6F7F8] 
                  !border ${error ? '!border-red-500' : '!border-gray-300'} 
                  !rounded-md !shadow-sm !font-baloo !text-lg
                  focus-within:!ring-0 focus-within:!border-orange-500
                `,
                            },
                            htmlInput: {
                                ...params.inputProps,
                                className: "!font-baloo !text-lg !outline-none",
                            },
                        }}
                    />
                )}
            />
            {error && <FormHelperText className="text-red-500">{error.message}</FormHelperText>}
        </FormControl>
    );
};