'use client';

import React from 'react';

import {
  Skeleton,
  SkeletonProps,
  Tooltip,
  TooltipProps,
} from '@nextui-org/react';
import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';

import { links } from '@/shared/lib';

type AssetImage = Required<
  Pick<ImageProps, 'src' | 'alt' | 'width' | 'height'>
> & {
  tooltipProps?: Omit<TooltipProps, 'content'>;
  skeletonProps?: Omit<SkeletonProps, 'isLoaded' | 'classNames'>;
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
};

export interface AssetIconProps extends AssetImage {
  subImage?: AssetImage;
}

export const AssetIcon = ({
  subImage,
  src,
  tooltipProps,
  wrapperProps,
  skeletonProps,
  ...restProps
}: AssetIconProps) => {
  const [isLoadedImage, setIsLoadedImage] = React.useState(false);
  const [isLoadedSubImage, setIsLoadedSubImage] = React.useState(!subImage);

  const isLoaded = isLoadedImage && isLoadedSubImage;

  const tooltipText = subImage?.alt
    ? `${restProps.alt} ${subImage.alt}`
    : restProps.alt;

  return (
    <Skeleton
      {...skeletonProps}
      isLoaded={isLoaded}
      classNames={{
        base: 'rounded-full dark:bg-background-chips',
        content: 'rounded-full bg-background-chips',
      }}
    >
      <Tooltip content={tooltipText} {...tooltipProps}>
        <div
          {...wrapperProps}
          className={clsx(
            'relative cursor-pointer rounded-full overflow-hidden',
            wrapperProps?.className,
          )}
          style={{
            height: restProps.height,
            width: restProps.width,
            ...wrapperProps?.style,
          }}
        >
          <Image
            {...restProps}
            src={src ? src : links.noImage}
            loading="lazy"
            onLoad={() => setIsLoadedImage(true)}
          />

          {subImage && (
            <Image
              {...subImage}
              src={subImage.src ? subImage.src : links.noImage}
              loading="lazy"
              onLoad={() => setIsLoadedSubImage(true)}
              className="rounded-full bg-white absolute right-0 bottom-0"
            />
          )}
        </div>
      </Tooltip>
    </Skeleton>
  );
};
