import CategoryService from '@/services/category-service';
import { Category } from '@/types/category';
import { useQuery } from '@tanstack/react-query';


export const getCategory = async (): Promise<Category[]> => {
    const result = await CategoryService.getAllCategories();
    return result.data;
};


export const useCategory = () => {
    const { data, isFetching, isFetched } = useQuery({
        queryKey: ['categories'],
        queryFn: () => getCategory(),
        initialData: []
    });

    return {
        data,
        isFetching,
        isFetched
    };
};

