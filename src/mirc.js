
const code = `;AKA Nick Tracker by Ford_Lawnmower irc.GeekShed.net #Script-Help
;*****************************************************************************;
;**Start Setup
;Change JoinDisplay, below, for On Join AKA Display. On = 1 - Off = 0
alias -l JoinDisplay { return 1 }
;Change MaxNicks, below, to the number of nicknames you want to store for each hostmask. I wouldn't go over 400 with this ;/
alias -l MaxNicks { return 20 }
;Change AKALogo, below, To the text you want displayed before each AKA result.
alias -l AKALogo { return 06 05A06K07A 06 }
;**End Setup
;*****************************************************************************;
On *:Join:#: {
  if ($nick == $me) { .timer 1 1 ialupdateCheck $chan }
  NickNamesAdd $nick $+($network,$wildsite)
  if ($JoinDisplay) { .timerNickNames $+ $nick 1 2 NickNames.display $nick $chan $network $wildsite }
}
on *:Nick: { NickNamesAdd $newnick $+($network,$wildsite) $nick }
alias -l NickNames.display {
  if ($gettok($hget(NickNames,$+($3,$4)),0,126) > 1) {
    echo -g $2 $AKALogo $+(09,$1) $AKALogo 07 $mid($replace($hget(NickNames,$+($3,$4)),$chr(126),$chr(44)),2,-1)
  }
}
alias -l NickNamesAdd {
  if ($hget(NickNames,$2)) {
    if (!$regex($hget(NickNames,$2),/~\\Q $+ $replacecs($1,\\E,\\E\\E\\Q) $+ \\E~/i)) {
      if ($gettok($hget(NickNames,$2),0,126) <= $MaxNicks) {
        hadd NickNames $2 $+($hget(NickNames,$2),$1,~)
      }
      else {
        hadd NickNames $2 $+($mid($hget(NickNames,$2),$pos($hget(NickNames,$2),~,2)),$1,~)
      }
    }
  }
  else {
    hadd -m NickNames $2 $+(~,$1,~,$iif($3,$+($3,~)))
  }
}
alias -l Fix.All.MindUser {
  var %Fix.Count = $hfind(NickNames,/[^~]+[0-9]{4}~/,0,r).data
  while (%Fix.Count) {
    if ($Fix.MindUser($hget(NickNames,$hfind(NickNames,/[^~]+[0-9]{4}~/,%Fix.Count,r).data))) {
      echo -ag Record %Fix.Count - $v1 - Was Cleaned
      hadd NickNames $hfind(NickNames,/[^~]+[0-9]{4}~/,%Fix.Count,r).data $v1
    }
    dec %Fix.Count
  }
}
alias -l Fix.MindUser { return $regsubex($1,/[^~]+[0-9]{4}~/g,$null) }
menu nicklist,query {
  -
  .AKA
  ..Check $$1: {
    if ($gettok($hget(NickNames,$+($network,$address($1,2))),0,126) > 1) {
      NickNames.display $1 $active $network $address($1,2)
    }
    else { echo -ag $AKALogo $+(09,$1) 07has not been known by any other nicknames while I have been watching. }
  }
  ..Cleanup $$1:hadd NickNames $+($network,$address($1,2)) $fix.minduser($hget(NickNames,$+($network,$address($1,2))))
  ..Clear $$1:hadd NickNames $+($network,$address($1,2)) $+(~,$1,~)
  ..AKA Search Dialog:dialog $iif($dialog(AKA_Search),-v,-m) AKA_Search AKA_Search
  -
}
menu status,channel {
  -
  .AKA
  ..AKA Search Dialog:dialog $iif($dialog(AKA_Search),-v,-m) AKA_Search AKA_Search
  ..Clean All Records:Fix.All.Minduser
  -
}
dialog AKA_Search {
  title "AKA Search Engine"
  size -1 -1 206 221
  option dbu
  edit "", 1, 8 5 149 10, autohs
  button "Search", 2, 163 4 32 12
  radio "Search HostMask", 4, 61 22 55 10
  radio "Search Nicknames", 5, 123 22 56 10
  list 6, 8 38 190 169, sort extsel vsbar
  button "Check Selected", 7, 67 206 40 12
  button "Close", 8, 160 206 38 12, cancel
  box "Search Type", 3, 11 17 183 18
  button "Copy to Clipboard", 9, 111 206 46 12
}
On *:Dialog:Aka_Search:init:*: { did -c $dname 5 }
On *:Dialog:Aka_Search:Sclick:2,7,9: {
  if ($did == 2) && ($did($dname,1)) {
    did -r $dname 6
    var %search $+(*,$v1,*), %type $iif($did($dname,5).state,data,item), %matches = $hfind(NickNames,%search,0,w). [ $+ [ %type ] ]
    while (%matches) {
      did -a $dname 6 $hfind(NickNames,%search,%matches,w). [ $+ [ %type ] ]
      dec %matches
    }
    did -c $dname 6 1
  }
  elseif ($did == 7) && ($did($dname,6).seltext) { echo -ga $AKALogo 07 $mid($replace($hget(NickNames,$v1),$chr(126),$chr(44)),2,-1) }
  elseif ($did == 9) && ($did($dname,6).seltext) { clipboard $mid($v1,$pos($v1,*,1)) }
}
On *:Start:{
  if (!$hget(NickNames)) { hmake NickNames 10 }
  if ($isfile(NickNames.hsh)) { hload  NickNames NickNames.hsh }
}
On *:Exit: { if ($hget(NickNames)) { hsave NickNames NickNames.hsh } }
On *:Disconnect: { if ($hget(NickNames)) { hsave NickNames NickNames.hsh } }
On *:Unload: { hfree NickNames }
alias -l ialupdateCheck {
  inc -z $+(%,ialupdateCheck,$network) $calc($nick($1,0) / 4)
  ;If your ial is already being updated on join .who $1 out.
  ;If you are using /names to update ial you will still need this line.
  .who $1
}
Raw 352:*: {
  if ($($+(%,ialupdateCheck,$network),2)) haltdef
  NickNamesAdd $6 $+($network,$address($6,2))
}
Raw 315:*: {
  if ($($+(%,ialupdateCheck,$network),2)) haltdef
}


`;

export default code;
