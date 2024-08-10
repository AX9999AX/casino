'use client'

import { Accordion, AccordionItem } from '@nextui-org/accordion'

import { title } from '@/components/primitives'

export default function HelpPage() {
    return (
        <div>
            <h1 className={title()}>Help</h1>
            <Accordion selectionMode='multiple' variant='shadow'>
                <AccordionItem
                    key='1'
                    aria-label='Forgot my password'
                    title='Forgot my password'
                >
                    If you provided a recovery email address for your account,
                    you can request a reset email here. Unfortunately, it is not
                    possible to reset an accounts password if you did not
                    provide a recovery email address for it.
                </AccordionItem>
                <AccordionItem
                    key='2'
                    aria-label='My deposit hasn’t been credited'
                    title='My deposit hasn’t been credited'
                >
                    We credit a pending deposit transaction to your account
                    after one confirmation (i.e. appears in one block). The
                    speed at which transactions get confirmed depends on your
                    transaction fee and the amount of other unconfirmed
                    transactions on the Bitcoin network. We can estimate when
                    any of your pending transactions will arrive, but you must
                    visit this page while logged in.
                </AccordionItem>
                <AccordionItem
                    key='3'
                    aria-label='My withdrawal hasn’t arrived'
                    title='My withdrawal hasn’t arrived'
                >
                    We process your immediate withdrawals and have them
                    broadcast on the blockchain as soon as possible. However, we
                    are unable to guarantee instant confirmation. The speed at
                    which transactions get confirmed depends on the transaction
                    fee and the amount of other unconfirmed transactions on the
                    Bitcoin network. We can estimate when any of your pending
                    transactions will arrive, but you must visit this page while
                    logged in.
                </AccordionItem>
                <AccordionItem
                    key='4'
                    aria-label='I can’t pre-credit my deposit'
                    title='I can’t pre-credit my deposit'
                >
                    Not all deposits are eligible for pre-crediting. If a
                    deposit cannot be pre-credited, it is because there is too
                    much of a possibility that the transaction will never be
                    confirmed. In that case, you will have to wait for the
                    deposit to be confirmed by the Bitcoin network before being
                    able to use it.
                </AccordionItem>
                <AccordionItem
                    key='5'
                    aria-label='What are bits?'
                    title='What are bits?'
                >
                    Bits are not a distinct currency but just another unit of
                    Bitcoin, like cents are to dollars. 1 bitcoin is always
                    equal to 1,000,000 bits. In other words, 1 bit is equal to
                    0.00000100 bitcoin. As the price of Bitcoin is constantly
                    changing, the value of bits does not stay the same either.
                    You can use bustabits chat bot to conveniently check how
                    much bits are worth in other currencies at current prices.
                    For example, try typing !convert 1000 bits GBP in chat to
                    find out what the value of 1,000 bits is currently in
                    British pounds.
                </AccordionItem>
                <AccordionItem
                    key='6'
                    aria-label='How do I deposit?'
                    title='How do I deposit?'
                >
                    You can deposit to your account by sending any amount of
                    Bitcoin to your deposit address. Your accounts current
                    deposit address can be found here. Depending on whats
                    available where you live, using an established service like
                    Coinbase or Kraken to purchase Bitcoin will be your cheapest
                    option. Opening an account can be a hassle and take a long
                    time, however. If you just want to purchase a small amount
                    as quickly as possible, we recommend buying on a marketplace
                    like Bisq.
                </AccordionItem>
                <AccordionItem
                    key='7'
                    aria-label='Which currencies does bustabit support?'
                    title='Which currencies does bustabit support?'
                >
                    bustabit exclusively uses Bitcoin. It is not possible to
                    deposit or withdraw in other currencies. For reasons of
                    security, private keys from our hot wallet are never
                    imported into unvetted software. Unfortunately, that means
                    that any other currencies (such as Bitcoin Cash) sent to
                    your deposit address will not be credited to your account
                    and cannot be returned to you.
                </AccordionItem>
                <AccordionItem
                    key='8'
                    aria-label='My deposit address changed'
                    title='My deposit address changed'
                >
                    To protect your privacy, bustabit generates a new deposit
                    address for you every time the previous one is used. This
                    makes it harder for third parties such as exchanges to track
                    your payments. Deposit addresses generated after 26/02/24
                    currently stay valid indefinitely, so if you happen to reuse
                    one, your deposit will still be credited to your account.
                    However, because this might change in the future and for
                    better privacy, we recommend always using a fresh deposit
                    address.
                </AccordionItem>
                <AccordionItem
                    key='9'
                    aria-label='Why does the withdrawal fee change from time to time?'
                    title='Why does the withdrawal fee change from time to time?'
                >
                    bustabits withdrawal fees reflect the actual cost of sending
                    a Bitcoin transaction. As transactions on the Bitcoin
                    network become cheaper or more expensive over time, the
                    withdrawal fee is dynamically adjusted so that we never
                    overcharge you.
                </AccordionItem>
                <AccordionItem
                    key='10'
                    aria-label='Why do you charge a deposit fee?'
                    title='Why do you charge a deposit fee?'
                >
                    Like withdrawals, deposits also incur costs. A greater
                    number of deposits means bigger Bitcoin transactions, which
                    in turn requires us to pay larger fees. To distribute this
                    cost fairly and keep withdrawal fees low, we charge a small
                    fee for deposits. As with the withdrawal fee, the size of
                    the deposit fee depends on how expensive transactions on the
                    Bitcoin network are at the time. Despite its name, the fee
                    is not charged when you deposit, but rather when you
                    withdraw or tip another player, so you will always receive
                    exactly what you deposit. The fee is only charged once for
                    each deposit you have made.
                </AccordionItem>
                <AccordionItem
                    key='11'
                    aria-label='I can’t withdraw my entire balance'
                    title='I can’t withdraw my entire balance'
                >
                    If you cannot withdraw your entire balance, it is because
                    you pre-credited a deposit and that deposit has not yet been
                    confirmed by the Bitcoin network. After pre-crediting a
                    deposit, you can start playing with it immediately. However,
                    while you can already withdraw any profits you earn, you
                    cannot withdraw the deposit itself until it is confirmed by
                    the Bitcoin network. Once the deposit is confirmed, it can
                    be withdrawn like any other deposit. The withdrawal form
                    shows you how much of your balance is available for
                    withdrawal.
                </AccordionItem>
                <AccordionItem
                    key='12'
                    aria-label='Does bustabit have a faucet?'
                    title='Does bustabit have a faucet?'
                >
                    bustabit used to have a faucet, but unfortunately, we were
                    forced to shut it down due to abuse. In order to play, you
                    will need to deposit first.
                </AccordionItem>
                <AccordionItem
                    key='13'
                    aria-label='How do I play?'
                    title='How do I play?'
                >
                    In order to play, you will first need to deposit to your
                    account. First, choose how much you want to wager and which
                    payout multiplier you want to target. Click BET to place
                    your bet and watch the multiplier rise from 1.00x upwards!
                    You can click CASH OUT at any time in order to multiply your
                    wager with the current multiplier. But be careful: The game
                    can end at any time, and if you haven nott cashed out by
                    then, you get nothing! If you do not attempt to cash out
                    manually, you will automatically be cashed out if the game
                    reaches your chosen payout.
                </AccordionItem>
                <AccordionItem
                    key='14'
                    aria-label='How do I know the game is fair?'
                    title='How do I know the game is fair?'
                >
                    bustabit proves that the odds are as advertised (1% house
                    edge) and that the rolls are predetermined and cannot react
                    to how players bet. Since bustabit is provably fair, you can
                    verify that yourself using this open-source verification
                    tool. If you are interested in the technical details of
                    bustabits provably fair system, have a look at our forum
                    thread and at this illustrative demo.
                </AccordionItem>
                <AccordionItem
                    key='15'
                    aria-label='Why are some multipliers red and some green?'
                    title='Why are some multipliers red and some green?'
                >
                    Based on the multipliers probabilities, we can expect half
                    of all rolls to be 1.97x or lower and the other half to be
                    1.98x or higher. Coloring these rolls either red or green
                    depending on which half they are in allows players to
                    quickly visualize how favorable rolls have been for players.
                </AccordionItem>
                <AccordionItem
                    key='16'
                    aria-label='How high can the multiplier go?'
                    title='How high can the multiplier go?'
                >
                    There is no real limit! To be precise, the technical limit
                    is 4,458,563,631,096,791.04x, but it is unlikely to ever be
                    reached. However, if during a game the bankroll ever faces a
                    potential loss of 1.5% or greater, the server will
                    automatically cash out all players, forcing them to enjoy an
                    early win.
                </AccordionItem>
                <AccordionItem
                    key='17'
                    aria-label='What does “max profit” mean?'
                    title='What does “max profit” mean?'
                >
                    The max profit is the most a player can win in a single bet.
                    It is always equal to 1% of the bankroll. If someone were to
                    win more than the max profit in a single game, then that
                    player will be forced to cash out. In addition, there is
                    another max profit equal to 1.5% of the bankroll that
                    applies to all bets in a round as a whole. If all players
                    combined were to win more than the per-round max profit,
                    everyone is forced to cash out.
                </AccordionItem>
                <AccordionItem
                    key='18'
                    aria-label='What is the house edge?'
                    title='What is the house edge?'
                >
                    The house edge is what a casino mathematically expects to
                    earn whenever a bet is placed. For example, bustabits house
                    edge is 1%, which means that on a 1 BTC wager, bustabit
                    expects to earn 0.01 BTC. Of course, that will never be the
                    case for an individual wager. On a 1 BTC bet, the house will
                    either lose money or win the entire 1 BTC. But over a very
                    large number of wagers, the casinos profit can be expected
                    to approach the sum of all wagers multiplied by the house
                    edge.
                </AccordionItem>
                <AccordionItem
                    key='19'
                    aria-label='What does the “luck” statistic mean?'
                    title='What does the “luck” statistic mean?'
                >
                    Luck shows how many bets you have won relative to your
                    expected win rate. For example, if you were to place 1,000
                    bets on 2.00x, you would expect to win 49.5% of the time, so
                    495 bets. But if, for example, you actually won 550 of those
                    bets, your win rate would be 55% and your luck approximately
                    +11% (55% / 49.5%).
                </AccordionItem>
                <AccordionItem
                    key='20'
                    aria-label='What happens if I disconnect during a game?'
                    title='What happens if I disconnect during a game?'
                >
                    If you lose the connection to bustabit while in a game, the
                    game will continue until it reaches your payout (and you
                    win) or it busts (and you lose). Because the payout is
                    processed on the server, it is always honored even if you
                    are unable to cash out manually, for example, because of
                    connection issues. It is always possible to encounter lag or
                    connection issues on the internet even if you have a good
                    internet connection so we recommend always providing a
                    payout that you are happy to cash out at.
                </AccordionItem>
                <AccordionItem
                    key='21'
                    aria-label='I cashed out but still lost.'
                    title='I cashed out but still lost.'
                >
                    Unfortunately, lag is present in all networked real-time
                    games like bustabit. Even if you have a good connection to
                    the internet, depending on many other factors, you may
                    sometimes experience lag on the internet. Although delayed
                    or missed cash-outs due to lag can be frustrating, it is
                    important to understand that, overall, bustabit and
                    investors do not profit from them. In bets that are won, lag
                    causes players to cash out slightly later than they intended
                    to, causing them to win more than they would have otherwise.
                    For this reason, we are unable to provide refunds for bets
                    lost due to lag. Our recommendation is to always set your
                    payout to a multiplier you are happy to cash out at. Payouts
                    are processed on the server and are honored even in the case
                    of connection issues.
                </AccordionItem>
                <AccordionItem
                    key='22'
                    aria-label='What is the bankroll?'
                    title='What is the bankroll?'
                >
                    The bankroll is the pool of money that players bet against.
                    When players win, the money comes out of bustabits bankroll,
                    and when they lose, the money goes into the bankroll.
                    bustabits bankroll is privately funded by bankroll
                    investors, meaning that anyone who has completed our
                    verification process and is eligible to invest will be able
                    to get a share of its profits. See How does bankroll
                    investing work? for more information on bankroll investing.
                </AccordionItem>
                <AccordionItem
                    key='23'
                    aria-label='How does bankroll investing work?'
                    title='How does bankroll investing work?'
                >
                    You can manage your contribution to the bankroll on the
                    bankroll management page. By investing in the bankroll, you
                    acquire a stake in its profits and losses. The profits and
                    losses that players generate for the house by betting are
                    shared proportionally among all investors relative to their
                    respective stakes in the bankroll. In other words, as an
                    investor, you profit when players lose, and you lose when
                    players profit. No money will be added to or subtracted from
                    your accounts balance. Instead, the value of your stake will
                    simply increase or decrease over time as players bet. For
                    example, if the bankroll is 200 BTC and you have invested 10
                    BTC, your stake is 5%. A player losing 1 BTC would increase
                    the size of the bankroll to 201 BTC and the value of your
                    stake–which is still 5%–to 10.05 BTC. Since the bankrolls
                    profits (and losses!) depend on how much players bet and how
                    lucky they are, it is not possible to accurately predict
                    future returns. DiceSites.com tracks several figures such as
                    bustabits wager volume and the bankrolls profit over time,
                    which can help you gauge the returns you can expect.
                    Whenever the bankrolls profit exceeds its previous all-time
                    high, bustabit will receive a commission on the profits
                    exceeding the previous all-time high. For example, say the
                    bankrolls profit all-time high is 100 BTC, its current
                    profit is 99 BTC, and players combined lose a total of 4 BTC
                    in a round. 3 BTC of that is net profit (exceeding the
                    previous all-time high), so with a commission rate of 60%,
                    bustabit would receive 1.8 BTC and the remaining 2.2 BTC
                    would go to the bankroll. The commission is charged in real
                    time, so investors can invest and divest whenever they like.
                </AccordionItem>
            </Accordion>
        </div>
    )
}
