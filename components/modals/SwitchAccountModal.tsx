'use client'
import { Button } from '@/components/button/Button';
import { useUpdateUser } from '@/features/user/useUpdateUser';
import { useUser } from '@/features/user/useUser';
import { refreshTokenService } from '@/services/auth-service';
import { ArrowRight, Building2, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props {
    targetRole: 'business' | 'user' 
}


export default function SwitchAccountModal({ targetRole }: Props) {
  const [open, setOpen] = useState(false);
  const { data: currentUser } = useUser();
  const router = useRouter();

  const { submit, isPending } = useUpdateUser({
    onSuccess: () => {
      refreshTokenService()
      setOpen(false);
      router.push('/');
    },
  });

  const onSubmit = () => {
    submit({ role: targetRole });
  };

  const isBusiness = currentUser?.role === 'business';

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="!rounded-2xl"
      >
        {isBusiness ? 'Switch to Personal' : 'Switch to Business'}
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)} 
          />

          <div className="relative bg-white w-full flex flex-col items-center max-w-[520px] rounded-3xl p-8 text-center z-10">

            <h2 className="text-xl font-bold mb-2">
              {isBusiness ? 'Switch to Personal Account' : 'Switch to Business Account'}
            </h2>

            <p className="text-gray-600 mb-6">
              {isBusiness
                ? 'You will lose access to promotions and analytics. Your profile and saved deals will remain the same.'
                : 'Access tools to promote deals, reach more people, and track performance.'}
            </p>

            {/* Icons */}
            <div className="flex justify-center items-center gap-4 mb-6">
              {isBusiness ? (
                <>
                  <Building2 />
                  <ArrowRight />
                  <User />
                </>
              ) : (
                <>
                  <User />
                  <ArrowRight />
                  <Building2 />
                </>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-3 w-80">
              <Button onClick={() => setOpen(false)} className="!bg-gray-300 !w-40 !text-black !rounded-2xl">
                Cancel
              </Button>

              <Button
                onClick={onSubmit}
                isLoading={isPending}
                isDisabled={isPending}
                className="!w-40 !rounded-2xl !px-0"
              >
                Confirm Switch
              </Button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}