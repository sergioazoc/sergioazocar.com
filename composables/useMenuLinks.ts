import type { NavigationMenuItem } from '@nuxt/ui'

const useMenuLinks = () => {
  const { t } = useI18n({
    useScope: 'global',
  })
  const localePath = useLocalePath()

  const menuLinks = computed<NavigationMenuItem[][]>(() => [
    [
      {
        label: t('navigation.home'),
        icon: '',
        to: localePath('index'),
      },
      {
        label: t('navigation.about'),
        icon: '',
        to: localePath('about'),
      },
      {
        label: 'Blog',
        icon: '',
        to: localePath('blog'),
      },
      {
        label: t('navigation.talks'),
        icon: '',
        to: localePath('talks'),
      },
    ],
    [
      {
        slot: 'language-switch',
        active: true,
        class: 'text-neutral-400',
      },
    ],
  ])

  return { menuLinks }
}

export default useMenuLinks
