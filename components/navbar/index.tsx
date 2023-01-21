import { useRef } from 'react'
import { Box, Flex } from '../primitives'
import GlobalSearch from './GlobalSearch'
import { useRouter } from 'next/router'
import { useHotkeys } from 'react-hotkeys-hook'
import Link from 'next/link'
import { ConnectWalletButton } from 'components/ConnectWalletButton'
import NavItem from './NavItem'
import ThemeSwitcher from './ThemeSwitcher'
import ChainSwitcher from './ChainSwitcher'
import HamburgerMenu from './HamburgerMenu'
import MobileSearch from './MobileSearch'
import { useTheme } from 'next-themes'
import { useMediaQuery } from 'react-responsive'
import { useMounted } from '../../hooks'
import { useAccount } from 'wagmi'
import { ProfileDropdown } from './ProfileDropdown'

export const NAVBAR_HEIGHT = 81
export const NAVBAR_HEIGHT_MOBILE = 77

const loadPortfolio = () => {
  document.location = '/portfolio'
}

const Navbar = () => {
  const { theme } = useTheme()
  const { isConnected } = useAccount()
  const isMobile = useMediaQuery({ query: '(max-width: 960px)' })
  const isMounted = useMounted()

  let searchRef = useRef<HTMLInputElement>(null)

  const router = useRouter()
  useHotkeys('meta+k', () => {
    if (searchRef?.current) {
      searchRef?.current?.focus()
    }
  })

  if (!isMounted) {
    return null
  }

  return isMobile ? (
    <Flex
      css={{
        height: NAVBAR_HEIGHT_MOBILE,
        px: '$4',
        width: '100%',
        borderBottom: '1px solid $gray4',
        zIndex: 999,
        background: '$slate1',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
      }}
      align="center"
      justify="between"
    >
      <Box css={{ flex: 1 }}>
        <Flex align="center">
          <Link href="/">
            <Box css={{ width: 34, cursor: 'pointer' }}>
              <span style={{fontSize: '32px'}}>
                {`▼`}
              </span>
            </Box>
          </Link>
        </Flex>
      </Box>
      <Flex align="center" css={{ gap: '$3' }}>
        <MobileSearch />
        <ChainSwitcher />
        <ThemeSwitcher />
        <HamburgerMenu />
      </Flex>
    </Flex>
  ) : (
    <Flex
      css={{
        height: NAVBAR_HEIGHT,
        px: '$5',
        width: '100%',
        maxWidth: 1920,
        mx: 'auto',
        borderBottom: '1px solid $gray4',
        zIndex: 999,
        background: '$neutralBg',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
      }}
      align="center"
      justify="between"
    >
      <Box css={{ flex: 1 }}>
        <Flex align="center">
          <Link href="/">
            <Box css={{ width: 22, cursor: 'pointer' }}>
              <span style={{fontSize: '22px'}}>
                {`▼`}
              </span>
            </Box>
          </Link>
          <Box css={{ flex: 1, px: '$5', maxWidth: 460 }}>
            <GlobalSearch
              ref={searchRef}
              placeholder="Search collections and addresses"
              containerCss={{ width: '100%' }}
              key={router.asPath}
            />
          </Box>

          <Flex align="center" css={{ gap: '$5', mr: '$5' }}>
            <Link href="/">
              <NavItem active={router.pathname == '/'}>Assets</NavItem>
            </Link>

            <Link href="https://lux.credit" prefetch>
              <NavItem active={router.pathname == '/credit'}>Credit</NavItem>
            </Link>

            <Link href="/earn" prefetch>
              <NavItem active={router.pathname == '/earn'}>Earn</NavItem>
            </Link>

            <Link href="https://lux.town">
              <NavItem active={router.pathname == '/mint'}>Mint</NavItem>
            </Link>

            <Link href="/swap" prefetch>
              <NavItem active={router.pathname == '/swap'}>Swap</NavItem>
            </Link>

            <Link href="/portfolio" onClick={loadPortfolio} prefetch>
              <NavItem active={router.pathname == '/portfolio'}>Trade</NavItem>
            </Link>

            <Link href="https://docs.lux.network" prefetch>
              <NavItem active={router.pathname == '/docs'}>?</NavItem>
            </Link>
          </Flex>

        </Flex>
      </Box>

      <Flex css={{ gap: '$3' }} justify="end" align="center">
        <ThemeSwitcher />
        <ChainSwitcher />
        {isConnected ? (
          <ProfileDropdown />
        ) : (
          <Box css={{ maxWidth: '185px' }}>
            <ConnectWalletButton />
          </Box>
        )}
      </Flex>
    </Flex>
  )
}

export default Navbar
